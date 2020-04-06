import React, { Component, useContext } from "react";
import { ThemeContext } from '@context'
import { CreateCampaignContainer, ListButtons, Telephone } from "./style";

import ImgTelephone from "@assets/imgTelephone";
import ImgText from "@assets/imgText.png";
import imgGeneric from "@assets/imgGeneric.png";
import ImgVideo from "@assets/imgVideo.png";
import imgContact from "@assets/imgContact.png";
import Send from "@assets/send.png";
import * as uuid4 from "uuid4"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import createBrowserHistory from "history/createBrowserHistory"

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
	padding: '12px 16px',
	margin: '20px 0',
	textAlign: 'center',

  // change background colour if dragging
	background: isDragging ? "#3e2352" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getEndItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
	margin: `0 0 ${grid}px 0`,
	textAlign: 'center',

  // change background colour if dragging
	background: isDragging ? "#3e2352" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: 'rgba(0,0,0,.3)',
  padding: grid,
  width: 300,
});

const getFinalListStyle = (isDraggingOver) => ({
	background: '#DDD',
	width: 303,
	height: 335,
	maxHeight: 335,
	margin: '0 auto',
	position: 'absolute',
	top: 156,
	padding: 15,
	left: 158,
	overflowY: 'auto'
});

class CreateCampaign extends Component {
  state = {
    items: [
      {
        id: uuid4(),
        type: "text",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={ImgText} alt="Adicionar novo item" />,
      },
      {
        id: uuid4(),
        type: "generic",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={imgGeneric} alt="Adicionar novo item" />,
      },
      {
        id: uuid4(),
        type: "video",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={ImgVideo} alt="Adicionar novo item" />,
      },
      {
        id: uuid4(),
        type: "contact",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={imgContact} alt="Adicionar novo item" />,
      },
    ],
    selected: [
			
		],
	};

	componentDidUpdate(prevProps, prevState) {
		const initialItems = [
      {
        id: uuid4(),
        type: "text",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={ImgText} alt="Adicionar novo item" />,
      },
      {
        id: uuid4(),
        type: "generic",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={imgGeneric} alt="Adicionar novo item" />,
      },
      {
        id: uuid4(),
        type: "video",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={ImgVideo} alt="Adicionar novo item" />,
      },
      {
        id: uuid4(),
        type: "contact",
        quantity: 1,
        content: <img style={{ maxHeight: 100 }} src={imgContact} alt="Adicionar novo item" />,
      },
		]

		if(this.state.items.length !== prevState.items.length) {
			return this.setState({ items: initialItems })
		} 

		return 
	}
	
	static contextType = ThemeContext;

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  getList = (id) => this.state[this.id2List[id]];

  onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
	};

  render() {
		const context = this.context;
		const history = createBrowserHistory({ forceRefresh: true })

    return (
      <CreateCampaignContainer>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
								{this.state.items.length === 0 && <span style={{ color: '#fff' }}>Arraste para cá para remover conteúdo</span>}
                {this.state.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
					<Telephone>
						<ImgTelephone />
						<Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getFinalListStyle(snapshot.isDraggingOver)}
              >
								{this.state.selected.length === 0 && <span style={{ color: '##503366' }}>Arraste para cá para adicionar conteúdo</span>}
                {this.state.selected.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getEndItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
						<button 
              disabled={this.state.selected.length === 0} 
              style={{ 
                position: 'absolute', 
                bottom: 49, 
                left: 296, 
                cursor: this.state.selected.length === 0 ? 'not-allowed' : 'pointer', 
                filter: this.state.selected.length === 0 ? 'grayscale(1)' : '' 
              }}
              onClick={() => {
                context.setCampaign({ items: this.state.selected });
                history.push('/campaign')
              }}
            >
							<img src={Send} />
						</button>
					</Telephone>
        </DragDropContext>
      </CreateCampaignContainer>
    );
  }
}

export default CreateCampaign;