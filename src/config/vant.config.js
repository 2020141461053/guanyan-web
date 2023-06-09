import {Button, Icon,Image, Swipe, SwipeItem } from 'vant';
import { Sticky } from 'vant';
import { Col, Row } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Tag } from 'vant';
import { Card } from 'vant';
import { Divider } from 'vant';
import { Tab, Tabs } from 'vant';
import { Collapse, CollapseItem } from 'vant';
export function vant(app) {
    app.use(Button)
    app.use(Icon)
    app.use(Image)
    app.use(Swipe)
    app.use(SwipeItem)
    app.use(Sticky)
    app.use(Col)
    app.use(Row)
    app.use(Cell)
    app.use(CellGroup)
    app.use(Tag)
    app.use(Card)
    app.use(Divider)
    app.use(Tab)
    app.use(Tabs)
    app.use(Collapse);
    app.use(CollapseItem);

}
