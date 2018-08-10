import React, { Component } from 'react';
import { Query, Mutation } from "react-apollo"
import { getSongs, deleteSong } from '../../queries/songQueries'

const DeleteSong = ({ songId }) => (
    <Mutation mutation={deleteSong}>
        {(deleteSong) => {
            return (
                <div>
                    <i
                        className="material-icons"
                        onClick={() => { deleteSong({ variables: { id: songId } }) }}>
                        delete
                    </i>
                </div>
            );
        }}
    </Mutation>
)

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
                                        <DeleteSong songId={id} />
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