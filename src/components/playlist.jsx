import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Playlist = ({ videos, onVideoClick, onDragEnd }) => {

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="playlist">
        {(provided) => (
          <ul className='list-play' {...provided.droppableProps} ref={provided.innerRef}>
            {videos.map((video, index) => (
              <Draggable key={video.id} draggableId={video.id} index={index}>
                {(provided) => (
                  <div
                  className='flex'
                  style={{ display: 'flex' }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img src={video.thumb} />
                    <div onClick={() => onVideoClick(video)}>
                      <div className='title-video'>{video.title}</div>
                      <div className='description-video'>{video.description}</div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Playlist;
