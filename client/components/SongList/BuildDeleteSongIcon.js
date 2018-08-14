import React from 'react';
import { Mutation } from "react-apollo"
import { getSongs, deleteSong } from '../../queries/songQueries'

const BuildDeleteSongIcon = ({ songId }) => {
    return (
        <Mutation
            mutation={deleteSong}
            refetchQueries={(result) => [{ query: getSongs }]}>
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
}

export default BuildDeleteSongIcon
