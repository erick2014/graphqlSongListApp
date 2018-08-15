import React from 'react';
import { Query } from 'react-apollo';
import { getSong } from '../../queries/songQueries'
import LikeLyric from './LikeLyric'

const BuildLyricsList = ({ id }) => {
    if (!id) return <div></div>
    return (
        <Query query={getSong} variables={{ id }}>
            {({ data }) => {
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
