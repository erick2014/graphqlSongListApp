import React, { Component } from 'react';
import { Query } from "react-apollo"
import { getSongs } from '../../queries/songQueries'


const BuildSongsList = (props) => {
    const {
        goToSongDetail,
        handleDeleteSong
    } = props

    return (
        <Query query={getSongs} >
            {({ loading, error, data }) => {
                const { songs } = data

                if (!songs || !songs.length) {
                    return (
                        <li>No songs were found</li>
                    )
                }

                return (
                    <ul className="collection">
                        {
                            songs.map(({ id, title }, index) => {
                                return (
                                    <li key={index} className="collection-item">
                                        <div
                                            className="collection-item-left-side"
                                            onClick={() => { goToSongDetail(id) }}>
                                            {title}
                                        </div>
                                        <div>
                                            <i
                                                className="material-icons"
                                                onClick={event => { handleDeleteSong(event, id) }}>
                                                delete
                                            </i>
                                        </div>
                                    </li>
                                )
                            })

                        }

                    </ul>
                )
            }}
        </Query>
    )
}

export default BuildSongsList