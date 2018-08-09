import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getSong } from '../../queries/songQueries'

const BuildLyricsList = ({ id }) => {
    if (!id) return <div></div>

    return (
        <Query query={getSong} variables={{ id }}>
            {({ loading, error, data }) => {
                const song = data && data.song || null
                const lyrics = song && song.lyrics ? song.lyrics : []
                return (
                    <div>
                        <h3>{song ? song.title : ''}</h3>
                        {
                            lyrics.length ?
                                lyrics.map((lyric, index) => <div key={index}>{lyric.content}</div>) :
                                <div>No lyrics found</div>
                        }
                    </div>
                )
            }}

        </Query>
    )
}

export default BuildLyricsList
