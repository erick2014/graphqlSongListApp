import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router'
import { getSongs } from '../queries/getSongs'
import { createSong } from '../queries/createSong'

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', isFetching: false }
        this.onSubmit = this.onSubmit.bind(this);
        this.buildCreateSongForm = this.buildCreateSongForm.bind(this)
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query: getSongs }]
        })
            .then(() => hashHistory.push('/'))
    }

    buildCreateSongForm() {
        return (
            <div>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Song Title:</label>
                    <input
                        onChange={e => this.setState({ title: e.target.value })}
                        value={this.state.title}
                    />
                </form>
            </div>

        )
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                {this.buildCreateSongForm()}
            </div>
        )
    }
}



export default graphql(createSong)(SongCreate)