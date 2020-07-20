import React from 'react';

const Card = ({name,email,id}) => {
    return (
      <div className="tc dib bg-light-green pa3 br3 ma2 grow bw2 shadow-5">
          {/* eslint-disable-next-line no-template-curly-in-string */}
          <img src={`https://robohash.org/${id}?200*200`} alt="robots"/>
          <div>
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
      </div>
    );
}
export default Card;
