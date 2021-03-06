import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { displayTime } from '../../utilities/Time';
import Code from '../Common/Code/Code';
import Reactions from '../Common/Reactions/Reactions';
import './Answer.css';

const Answer = ({answer}) => {
    const {answerText, code, answeredAt, answeredBy} = answer;
    const answeredToday = new Date(answeredAt).getTime() > new Date().getTime() - 86400000;
    const [thumbsUpCount, setThumbsUpCount] = useState(answer.thumbsUpCount);
    const [thumbsUp, setThumbsUp] = useState(answer.thumbsUp);

    return (
        <div className="answer">
            <p>{answerText}</p>
            {code && <Code code={[code]} editable={false} />}
            <span>
                <FontAwesomeIcon icon={faClock} className="icon" /> {displayTime(answeredAt)}{" "}
                <FontAwesomeIcon icon={faUser} className="icon" /> {answeredBy.userName}
            </span>
            <Reactions
                of={answer}
                type="answers"
                thumbsUps={[thumbsUp, setThumbsUp]}
                setThumbsUps={[thumbsUpCount, setThumbsUpCount]}
            />
        </div>
    );

};

export default Answer;