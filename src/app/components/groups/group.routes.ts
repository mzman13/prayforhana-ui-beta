import { GroupComponent }       from './group/group.component';
import { GroupcreateComponent } from './groupcreate/groupcreate.component';
import { GroupsComponent }      from './groups/groups.component';
import { GroupwriteComponent }  from './groupwrite/groupwrite.component';


export const GroupsRoutes = [
  {
    path: 'groups/:group_id',
    component: GroupComponent
  }, {
    path: 'creategroup',
    component: GroupcreateComponent
  }, {
    path: 'groups',
    component: GroupsComponent
  }, {
    path: 'groups/write/:group_id',
    component: GroupwriteComponent
  }
];