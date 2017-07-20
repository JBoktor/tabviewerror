import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SelectedIndexChangedEventData, TabView, TabViewItem } from 'tns-core-modules/ui/tab-view';
import { isNullOrUndefined } from 'tns-core-modules/utils/types';

@Component({
    selector: 'my-menu',
    moduleId: module.id,
    templateUrl: './tabview.component.html',
})

export class TabviewComponent implements AfterViewInit {

    @ViewChild('tabs')
    public tabsRef: ElementRef;

    public tabs: TabView;

    public ngAfterViewInit() {
        const initialIndex: number = 0;
        this.tabs = this.tabsRef.nativeElement;

        this.tabs.on(TabView.selectedIndexChangedEvent, (e: SelectedIndexChangedEventData) => {
            this.onTabChange(e.newIndex, e.oldIndex);

            this.onTabChange(initialIndex);


        });
    }

    private onTabChange(newIndex: number, oldIndex?: number): void {
        this.setIconSource(newIndex, oldIndex);
    }

    private setIconSource(newIndex: number, oldIndex?: number): void {
        if (newIndex === 2) {
            let items: Array<TabViewItem> = this.tabs.items;
            items[newIndex].iconSource = items[newIndex].iconSource.replace('inactive', 'active');
            if (!isNullOrUndefined(oldIndex) && oldIndex !== -1) {
                items[oldIndex].iconSource = items[oldIndex].iconSource.replace('active', 'inactive');
            }
        }

    }


}
