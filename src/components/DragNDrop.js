import React, { useState, useRef } from "react";

function DragNDrop({ data }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    //params are gIndex and iIndex
    console.log("drag starting", params);
    //every time we drag we set dragItem to the params
    dragItem.current = params;
    //dragNode = the current node that we are dragging
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    //asynchronous, when we start dragging it changes to dark background and keeps white background item
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    //for scrolling over other items
    //will fire anytime you drag on top of the other items as well
    //params are now for the item we are dragging over
    console.log("entering drag", params);
    const currentItem = dragItem.current;
    //if the target item is not the same as the item we're dragging
    if (e.target !== dragNode.current) {
      console.log("target not the same");
      setList((oldList) => {
        //make a deep copy of oldlist which is just list from line4
        let newList = JSON.parse(JSON.stringify(oldList));
        //take the 1 st flip with 2 nd, without removing anything in between 0 (1,0,2)
        //removing our currently dragged item, [0] will return that item because only 1 in the list
        newList[params.gIndex].items.splice(
          params.iIndex,
          0,
          newList[currentItem.gIndex].items.splice(currentItem.iIndex, 1)[0]
        );
        //currentItem now became the target item so
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    console.log("end dragging");
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    //params gIndex and iIndex from dragging? ternary
    const currentItem = dragItem.current;
    if (
      currentItem.gIndex === params.gIndex &&
      currentItem.iIndex === params.iIndex
    ) {
      return "current dnd-item";
    }
    //want classes current and dnd-item when dragging true, otherwise just dnd-item
    return "dnd-item";
  };

  return (
    <div className="drag-n-drop">
      {list.map((group, gIndex) => (
        <div 
          key={group.title} 
          className="dnd-day"
          //for dragging over empty column:
          //if we are dragging and positive number of items in a group. 0 would be false.
          //then we want to handleDragEnter
          //we don't have an item in this case so we can set default of item Index to 0.
          onDragEnter={dragging && !group.items.length ? (e) => handleDragEnter(e, {gIndex, iIndex: 0}) : null}
        >
          <div className="dnd-day-title">{group.title}</div>
          {group.items.map((item, iIndex) => (
            <div
              draggable
              onDragStart={(e) => {
                handleDragStart(e, { gIndex, iIndex });
              }}
              onDragEnter={
                dragging
                  ? (e) => {
                      handleDragEnter(e, { gIndex, iIndex });
                    }
                  : null
              }
              //can't use onDragEnd bc unpredicted behavior and could break things
              key={item}
              className={dragging ? getStyles({ gIndex, iIndex }) : "dnd-item"}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DragNDrop;
