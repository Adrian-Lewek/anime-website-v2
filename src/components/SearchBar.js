import React, {useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import SearchInput from './SearchInput'
let test = false
const SearchBar = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [inputClass, setInputClass] = useState('searchBarInput');
  const searching = useSelector(state => state.searching);
  let history = useHistory();

  useEffect(() => {
    if(test) {
      if (searching !== ''){
        history.push({
          pathname: '/search',
          search: `?${searching}`
        });
      } else history.push('')
      
    } else test = true
    
  }, [searching])
  const handleClick = () =>{
    if (searchBarActive){
      setInputClass('inputOff')
      setTimeout(() => {
        
        setSearchBarActive(prev => !prev)
      }, 400);
    } else{
      setInputClass('searchBarInput')
      setSearchBarActive(prev => !prev)
    }
    
  }
  return(
    <span className="searchBar" >
      <span onClick={handleClick}><FaSearch/></span>
      {searchBarActive && <SearchInput inputClass={inputClass}/>}
    </span>
  )
}
export default SearchBar;