import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {searchValue} from '../redux/actions/searching'



const SearchInput = props => {

  const searching = useSelector(state => state.searching);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(searchValue(''));
    }
  }, [])
  const handleChange = (e) =>{
    dispatch(searchValue(e.target.value));
  }
  return(
    <input autoFocus className={props.inputClass} value={searching} onChange={handleChange}/>
  ) 
}
export default SearchInput;