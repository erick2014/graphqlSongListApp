import React, { Component } from 'react';
import { graphql, compose } from "react-apollo"
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

import { getSongs, deleteSong } from '../queries/songQueries'
class SongList extends Component {

    handleDeleteSong(id) {
        this.props.deleteSong({
            variables: { id },
            refetchQueries: [{ query: getSongs }]
        })
    }

    goToSongDetail(songId) {
        hashHistory.push(`song/${songId}`)
    }

    buildSongs() {
        const { getSongsList: { songs } } = this.props

        if (!songs || !songs.length) {
            return <div>No songs were found</div>
        }
        return songs.map(({ id, title }, index) => {
            return (
                <li key={index} className="collection-item" onClick={() => this.goToSongDetail(id)}>
                    <span>{title}</span>
                    <i className="material-icons" onClick={() => { this.handleDeleteSong(id) }}>
                        delete
                    </i>
                </li>
            )
        })
    }

    render() {
        const { getSongsList: { loading } } = this.props

        if (loading) return <div>Loading...</div>

        return (
            <div>
                <ul className="collection">
                    {this.buildSongs()}
                </ul>
                <Link to="/songs/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

export default compose(
    graphql(getSongs, { name: 'getSongsList' }),
    graphql(deleteSong, { name: 'deleteSong' })
)(SongList) 