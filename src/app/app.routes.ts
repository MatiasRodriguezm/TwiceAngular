import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NayeonComponent } from './pages/nayeon/nayeon.component';
import { MomoComponent } from './pages/momo/momo.component';
import { JeongComponent } from './pages/jeong/jeong.component';
import { MinaComponent } from './pages/mina/mina.component';
import { JihyoComponent } from './pages/jihyo/jihyo.component';
import { SanaComponent } from './pages/sana/sana.component';
import { DahyunComponent } from './pages/dahyun/dahyun.component';
import { ChaeComponent } from './pages/chae/chae.component';
import { TzuyuComponent } from './pages/tzuyu/tzuyu.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},

    {path: 'nayeon', component: NayeonComponent},
    {path: 'momo', component: MomoComponent},
    {path: 'jeong', component: JeongComponent},
    {path: 'mina', component: MinaComponent},
    {path: 'jihyo', component: JihyoComponent},
    {path: 'sana', component: SanaComponent},
    {path: 'dahyun', component: DahyunComponent},
    {path: 'chae', component: ChaeComponent},
    {path: 'tzuyu', component: TzuyuComponent},

];
