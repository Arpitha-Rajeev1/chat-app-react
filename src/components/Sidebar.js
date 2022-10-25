import React from 'react';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../firebase';
import CreateIcon from '@mui/icons-material/Create';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SidebarOption from './SidebarOption';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ThreePIcon from '@mui/icons-material/ThreeP';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { collection } from 'firebase/firestore';

function Sidebar() {
    const [channels] = useCollection(collection(db, "rooms"));
    const [user] = useAuthState(auth);
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h3>{user?.displayName}</h3>
                    <h4>
                      <FiberManualRecordIcon /> Active
                    </h4>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={TextsmsIcon} title={"Threads"} />
            <SidebarOption Icon={ThreePIcon} title={"Direct Messages"} />
            <SidebarOption Icon={SentimentVerySatisfiedIcon} title={"Mentions & reactions"} />
            <SidebarOption Icon={BookmarkBorderIcon} title={"Saved items"} />
            <SidebarOption Icon={CompassCalibrationIcon} title={"Chat Connect"} />
            <SidebarOption Icon={AppsOutageIcon} title={"Apps"} />
            <SidebarOption Icon={PeopleOutlineIcon} title={"People & user groups"} />
            <SidebarOption Icon={ExpandLessIcon} title={"Show less"} />
            <hr />
            <SidebarOption Icon={AddLinkIcon} title={"Channels"} />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title={"Add Channel"} />

            {channels?.docs.map(doc => (
            <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SidebarContainer> 
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    background-color: var(--chat-color);
    color: black;
    flex: 0.3;
    max-width: 240px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 0.1px solid #76c6d2;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: black;
        font-size: 18px;
        background-color: white;
        border-radius: 1000px;
        margin-left: 30px;
        margin-top: -6px;
    }
`;

const SidebarInfo = styled.div`
        flex: 1;

        > h3 {
            font-size: 15px;
            font-weight: 900;
            margin-bottom: 5px;
        }

        > h4 {
            display: flex;
            font-size: 15px;
            font-weight: 500;
            align-items: center;
        }

        > h4 > .MuiSvgIcon-root {
            color: green;
            font-size: 16px;
            margin-right: 2px;
        }
`;
