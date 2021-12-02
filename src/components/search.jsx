import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get("./json/sea.json")
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

  const firstYear =
    APIData && APIData.length > 0
      ? Number(APIData[0].Time.slice(0, 4))
      : 0;

  const lastYear =
  APIData && APIData.length > 0
      ? Number(APIData[APIData.length - 1].Time.slice(0, 4))
      : 0;


    return (
        <div className="yearsSearch">
        <div style={{ padding: 20 }}>
        <div className="search-input">
            <Input icon='search'
                placeholder='Sök år'
                onChange={(e) => searchItems(e.target.value)}
            />
            </div>
            <Card.Group className="resContainer">
            
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div className="yearsSearchRes">
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.Time.slice(0, 4)}</Card.Header>
                                    <Card.Description>
                                    Havsnivå: {item.GMSL} mm<br></br>
                                    Osäkerhet i mätningen: {item["GMSL uncertainty"]} mm
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            </div>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <div className="yearsSearchRes">
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.Time.slice(0, 4)}</Card.Header>
                                    <Card.Description>
                                    Havsnivå: {item.GMSL} mm <br></br>
                                    Osäkerhet i mätningen: {item["GMSL uncertainty"]} mm
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                            </div>
                        )
                    })
                )}
            </Card.Group>
        </div>
        </div>
    )
}

