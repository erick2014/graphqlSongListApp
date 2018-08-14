import React from 'react';
import { Mutation } from 'react-apollo';
import { likeLyric } from '../../queries/songQueries'

const LikeLyric = ({ lyricId, likes }) => {
    return (
        <Mutation
            mutation={likeLyric}
            optimisticResponse={{
                __typename: "Mutation",
                likeLyric: {
                    id: lyricId,
                    __typename: "LyricType",
                    likes: likes + 1
                }
            }}>
            {(likeLyric) => {
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

export default LikeLyric