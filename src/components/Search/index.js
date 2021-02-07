import { Button } from '@material-ui/core'
import { Mic, SearchOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useStateValue} from '../../StateProvider'
import {actionType} from '../../reducer'
import './styles.css'
function Search({hideButtons}) {

      const [{},dispatch] = useStateValue()
      const [input,setInput] = useState('')
      const history = useHistory()
      const search =(e)=>{
            e.preventDefault()
              dispatch({
                    type:actionType.type,
                    term:input
              })

            history.push('/search')

      }
      return (
            <form className="search">
                  <div className="search_input">
                        <SearchOutlined className="search_icon"/>
                        <input 
                        placeholder="Search"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        />
                        <Mic/>
                  </div>
                  {!hideButtons?(
                        <div className="search_buttons">
                        <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                  </div>
                  ):(
                        <div className="search_buttons">
                        <Button className="hidden" onClick={search} type="submit" variant="outlined">Google Search</Button>
                        <Button className="hidden" variant="outlined">I'm Feeling Lucky</Button>
                        </div>
                  )}
                  
            </form>
      )
}

export default Search
