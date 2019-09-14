import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  const download_url = repo.html_url + '/archive/master.zip';
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
          {repo.name}
        </a>
        <a
          className='badge badge-success'
          href={download_url}
          style={{ float: 'right' }}
        >
          Download {repo.name}.zip
        </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.array.isRequired
};

export default RepoItem;
