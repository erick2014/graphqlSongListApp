import React, { Component } from 'react';
import { graphql, compose } from "react-apollo"
import { Link } from 'react-router'
import { hashHistory } from 'react-router'
import { getSongs, deleteSong } from '../../queries/songQueries'
import BuildSongsList from './BuildSongList'

class SongList extends Component {
    constructor(props) {
        super(props)
        this.handleDeleteSong = this.handleDeleteSong.bind(this)
    }

    handleDeleteSong(event, id) {
        event.preventDefault();
        this.props.deleteSong({
            variables: { id },
            refetchQueries: [{ query: getSongs }]
        })
    }

    goToSongDetail(songId) {
        hashHistory.push(`song/${songId}`)
    }

    render() {
        return (
            <div>
                <BuildSongsList
                    goToSongDetail={this.goToSongDetail}
                    handleDeleteSong={this.handleDeleteSong}
                />
                <Link to="/songs/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div >
        )
    }
}

export default compose(
    graphql(deleteSong, { name: 'deleteSong' })
)(SongList)