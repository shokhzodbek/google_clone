import React from 'react'
import './styles.css'
import Search from '../../components/Search'
import {useStateValue} from '../../StateProvider'
import useGoogleSearch from '../../useGoogleSearch'

import {Link} from 'react-router-dom'
import { Description, Image, LocalOffer, MoreVert, Room, SearchOutlined } from '@material-ui/icons'
function SearchPages() {
      const [{term},dispatch]=useStateValue()
      const {data} = useGoogleSearch(term)
      console.log(data)
      return (
            <div className="search_page">
                  <div className="search_header">
                    <Link to = '/'>
                          <img className="logo" src="data:image/png;base64,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"/>

                    </Link>
                    <div className="header_b">
                    <Search hideButtons/>
                    <div className="search_option">
                          <div className="opt_left">
                                <div className="left_opt">
                                      <SearchOutlined/>
                                      <Link to="/all">All</Link>
                                </div>
                                <div className="left_opt">
                                      <Description/>
                                      <Link to="/news">News</Link>
                                </div>
                                <div className="left_opt">
                                      <Image/>
                                      <Link to="/images">Images</Link>
                                </div>
                                <div className="left_opt">
                                      <LocalOffer/>
                                      <Link to="/shopping">shopping</Link>
                                </div>
                                <div className="left_opt">
                                      <Room/>
                                      <Link to="/maps">maps</Link>
                                </div>
                                <div className="left_opt">
                                      <MoreVert/>
                                      <Link to="/more">more</Link>
                                </div>
                          </div>

                          <div className="opt_right">
                          <div className="left_opt">
                                      <Link to="/settings">Settings</Link>
                                </div>
                                <div className="left_opt">
                                    
                                      <Link to="/tools">Tools</Link>
                                </div>
                          </div>
                    </div>
                    </div>
                  
                  </div>
                       {true && (

                      <div className="search_result">
                        {(data?.items.map(item=>(
                              <div className="page_results">
                                    <a href={item.link}>
                                          {item.pagemap?.cse_image?.length>0 && item.pagemap?.
                                          cse_image[0]?.src &&(
                                                <img className="resultImage" src={
                                           item.pagemap?.
                                          cse_image[0]?.src
                                                }
                                                
                                                />
                                          )
                                          }
                                          {item.displayLink}
                                    </a>
                                    <a href={item.link} className="result_title">
                                          <h2>{item.title}</h2>
                                        </a>
                                        <p className="snippet">
                                              {item.snippet}
                                        </p>
                              </div>
                        )))}
                      </div>
                       )}
                  
                 
                  
            </div>
      )
}
export default SearchPages
