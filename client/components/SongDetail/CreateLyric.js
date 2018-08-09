import React, { Component } from 'react';
import { getSong, addLyricToSong } from '../../queries/songQueries'
import { Mutation } from 'react-apollo';

const CreateLyric = props => {
    const {
        lyricContent,
        changeContent,
        songId,
        clearField
    } = props

    const updateCacheInfo = (cache, addLyricToSong) => {
        const { song } = cache.readQuery({ query: getSong, variables: { id: songId } })
        const lyricsLength = addLyricToSong.lyrics.length
        const newLyric = addLyricToSong.lyrics[lyricsLength - 1];
        cache.writeQuery({
            query: getSong,
            data: Object.assign({}, song, {
                lyrics: song.lyrics.concat(newLyric)
            })
        });
    }

    return (
        <Mutation
            mutation={addLyricToSong}
            update={(cache, { data: { addLyricToSong } }) => {
                updateCacheInfo(cache, addLyricToSong)
            }}>
            {(addLyricToSong, data) => {
                return (
                    <div className={"add-lyric-to-song-container"}>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            addLyricToSong({ variables: { content: lyricContent, songId } })
                            clearField()
                        }}>
                            <label>Add lyric:</label>
                            <input
                                onChange={e => { changeContent(e.target.value) }}
                                value={lyricContent}
                            />
                        </form>
                    </div>
                );
            }}
        </Mutation>

    )
}

export default CreateLyric