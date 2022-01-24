// import {useHttp} from '../hooks/http.hook';
import { useHttp } from "../components/hooks/http.hook";

const useMarvelService = () => {

  const {loading, request, error, clearError} = useHttp();
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=aaaf44f071065073835657ec2a13ed7c";
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  //https://gateway.marvel.com:443/v1/public/characters?name=Thor&apikey=aaaf44f071065073835657ec2a13ed7c
  const getCharacterByName = async (name) => {
    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
    return res.data.results.map(_transformCharacter);
}

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
    return res.data.results.map(_transformComics);
}

const getComic = async (id) => {
  const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
  return _transformComics(res.data.results[0]);
}

  const _transformCharacter = (char) => {

    return {
      name: char.name,
      id: char.id,
      // description: this.checkDescription(char.description),
      description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComics = (comics) => {
    return {
        id: comics.id,
        title: comics.title,
        description: comics.description || 'There is no description',
        pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
        thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
        language: comics.textObjects.language || 'en-us',
        price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'price not available'
    }
}

  return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, getCharacterByName}
}
export default useMarvelService;
