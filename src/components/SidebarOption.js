import { collection, addDoc } from 'firebase/firestore';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import db from '../firebase';

function SidebarOption({ Icon, title, addChannelOption, id }) {
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');

        if (channelName) {
            addDoc(collection(db, "rooms"), {
                name: channelName
            });
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            })
            );
        };
    }

    return (
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: aliceblue;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

const SidebarOptionChannel = styled.div`
    padding: 10px 18px;
    font-weight: 600;
    font-size: 12px;
`;