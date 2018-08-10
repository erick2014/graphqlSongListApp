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

    return (
        <Mutation mutation={addLyricToSong}>
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