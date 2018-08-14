import React, { Component } from 'react';
import { Link } from 'react-router'
import BuildLyricsList from './LyricsList'
import BuildCreateLyricForm from './CreateLyric'

class SongDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lyricContent: '',
            songId: ''
        }
        this.changeContent = this.changeContent.bind(this);
        this.handleClearField = this.handleClearField.bind(this);
    }

    changeContent(value) {
        this.setState({ lyricContent: value })
    }

    handleClearField() {
        this.setState({ lyricContent: "" })
    }

    componentDidMount() {
        this.setState({ songId: this.props.params.songId })
    }

    render() {
        const { songId, lyricContent } = this.state
        return (
            <div>
                <Link to="/">Back</Link>
                <BuildLyricsList id={songId} />
                <BuildCreateLyricForm
                    clearField={this.handleClearField}
                    lyricContent={lyricContent}
                    changeContent={this.changeContent}
                    songId={songId}
                />
            </div>
        )
    }
}



export default SongDetail