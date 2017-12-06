import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class FolderHeader extends Component {
    render() {
        let folder = this.props.folder;

        return (
            <div className='folder-header'>
                <h2 className='folder-title text-left'>
                    {folder.name}
                </h2>

                <div className='header-buttons text-right'>
                    <Button color='primary' outline title='Share folder'><i className='fa fa-link' aria-label='Share folder'
                        onClick={this.props.toggleShareModal}
                    ></i></Button>
                    {' '}
                    <Button color='secondary' outline title='Rename folder'
                        onClick={this.props.toggleEditModal}
                    ><i className='fa fa-pencil' aria-label='Rename folder'></i></Button>
                    {' '}
                    <Button color='danger' outline title='Delete folder'><i className='fa fa-trash' aria-label='Delete folder'
                        onClick={this.props.toggleDeleteModal}
                    ></i></Button>
                </div>
            </div>
        );
    }
}