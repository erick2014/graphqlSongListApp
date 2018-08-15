import React from 'react';
import { Query } from "react-apollo"
import { getSongs } from '../../queries/songQueries'
import BuildDeleteSongIcon from './BuildDeleteSongIcon'

const BuildSongsList = (props) => {
    const {
        goToSongDetail
    } = props

    return (
        <Query query={getSongs} >
            {({ data }) => {
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
                                        <BuildDeleteSongIcon songId={id} />
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