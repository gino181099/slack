import React, {useState, useEffect} from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useStateValue } from "../StateProvider"

function Sidebar(){
  const [channels, setChannels] = useState([])
	const [{ user }] = useStateValue()
  useEffect(()=>{
    //Run this code ONCE when the Sidebar Loads
    db.collection('rooms').onSnapshot(snapshot =>{
      setChannels(
        snapshot.docs.map(doc=>({
          id: doc.id,
          name: doc.data().name
        }))
      )
    });
  }, [])
  return(
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Usuario conectado</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
        <SidebarOption Icon={InsertCommentIcon} title="Hilos" />
        <SidebarOption Icon={InboxIcon} title="Menciones" />
        <SidebarOption Icon={DraftsIcon} title="Guardado" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Libros" />
        <SidebarOption Icon={PeopleAltIcon} title="Contactos" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="Archivos" />
        <SidebarOption Icon={ExpandLessIcon} title="Ver menos" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Canales" />
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption  title="Añadir canal" />

        {channels.map(channel => (
          <SidebarOption title={channel.name} id={channel.id}  />
        ))}
    </div>
  );
}

export default Sidebar;
