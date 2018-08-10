import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { getSong, likeLyric } from '../../queries/songQueries'

const LikeLyric = ({ lyricId, likes }) => {
    return (
        <Mutation mutation={likeLyric}>
            {(likeLyric, data) => {
                return (
                    <div className="likes-container">
                        <span>{likes}</span>
                        <i
                            className="material-icons"
                            onClick={() => likeLyric({ variables: { id: lyricId } })}>
                            thumb_up
                        </i>
                    </div>
                );
            }}
        </Mutation>
    )
}

const BuildLyricsList = ({ id }) => {
    if (!id) return <div></div>
    return (
        <Query query={getSong} variables={{ id }}>
            {({ loading, error, data }) => {
                const song = data && data.song || null
                const lyrics = song && song.lyrics ? song.lyrics : []
                const songTitle = <h3>{song ? song.title : ''}</h3>

                if (!lyrics) return (
                    <div className="collection">
                        {songTitle}
                        <div className="collection-item">No lyrics found</div>
                    </div>
                )

                return (
                    <div className="collection">
                        {songTitle}
                        {
                            lyrics.map(({ content, id, likes }, index) => {
                                return (
                                    <div className="collection-item" key={index}>
                                        <div className="collection-item-left-side">{content}</div>
                                        <LikeLyric lyricId={id} likes={likes} />
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            }}

        </Query>
    )
}

export default BuildLyricsList
