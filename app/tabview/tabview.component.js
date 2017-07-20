"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tab_view_1 = require("tns-core-modules/ui/tab-view");
var types_1 = require("tns-core-modules/utils/types");
var TabviewComponent = (function () {
    function TabviewComponent() {
    }
    TabviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var initialIndex = 0;
        this.tabs = this.tabsRef.nativeElement;
        this.tabs.on(tab_view_1.TabView.selectedIndexChangedEvent, function (e) {
            _this.onTabChange(e.newIndex, e.oldIndex);
            _this.onTabChange(initialIndex);
        });
    };
    TabviewComponent.prototype.onTabChange = function (newIndex, oldIndex) {
        this.setIconSource(newIndex, oldIndex);
    };
    TabviewComponent.prototype.setIconSource = function (newIndex, oldIndex) {
        if (newIndex === 2) {
            var items = this.tabs.items;
            items[newIndex].iconSource = items[newIndex].iconSource.replace('inactive', 'active');
            if (!types_1.isNullOrUndefined(oldIndex) && oldIndex !== -1) {
                items[oldIndex].iconSource = items[oldIndex].iconSource.replace('active', 'inactive');
            }
        }
    };
    return TabviewComponent;
}());
__decorate([
    core_1.ViewChild('tabs'),
    __metadata("design:type", core_1.ElementRef)
], TabviewComponent.prototype, "tabsRef", void 0);
TabviewComponent = __decorate([
    core_1.Component({
        selector: 'my-menu',
        moduleId: module.id,
        templateUrl: './tabview.component.html',
    })
], TabviewComponent);
exports.TabviewComponent = TabviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRix5REFBbUc7QUFDbkcsc0RBQWlFO0FBUWpFLElBQWEsZ0JBQWdCO0lBQTdCO0lBb0NBLENBQUM7SUE3QlUsMENBQWUsR0FBdEI7UUFBQSxpQkFXQztRQVZHLElBQU0sWUFBWSxHQUFXLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRXZDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFPLENBQUMseUJBQXlCLEVBQUUsVUFBQyxDQUFnQztZQUM3RSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXpDLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFHbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sc0NBQVcsR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxRQUFpQjtRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sd0NBQWEsR0FBckIsVUFBc0IsUUFBZ0IsRUFBRSxRQUFpQjtRQUNyRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLEtBQUssR0FBdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEYsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMxRixDQUFDO1FBQ0wsQ0FBQztJQUVMLENBQUM7SUFHTCx1QkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFqQ0c7SUFEQyxnQkFBUyxDQUFDLE1BQU0sQ0FBQzs4QkFDRixpQkFBVTtpREFBQztBQUhsQixnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7R0FFVyxnQkFBZ0IsQ0FvQzVCO0FBcENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlldywgVGFiVmlld0l0ZW0gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3JztcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVudScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFidmlldy5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgVGFidmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZCgndGFicycpXG4gICAgcHVibGljIHRhYnNSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgdGFiczogVGFiVmlldztcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxJbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy50YWJzID0gdGhpcy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy50YWJzLm9uKFRhYlZpZXcuc2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudCwgKGU6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlKGUubmV3SW5kZXgsIGUub2xkSW5kZXgpO1xuXG4gICAgICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlKGluaXRpYWxJbmRleCk7XG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGFiQ2hhbmdlKG5ld0luZGV4OiBudW1iZXIsIG9sZEluZGV4PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0SWNvblNvdXJjZShuZXdJbmRleCwgb2xkSW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SWNvblNvdXJjZShuZXdJbmRleDogbnVtYmVyLCBvbGRJbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAobmV3SW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgIGxldCBpdGVtczogQXJyYXk8VGFiVmlld0l0ZW0+ID0gdGhpcy50YWJzLml0ZW1zO1xuICAgICAgICAgICAgaXRlbXNbbmV3SW5kZXhdLmljb25Tb3VyY2UgPSBpdGVtc1tuZXdJbmRleF0uaWNvblNvdXJjZS5yZXBsYWNlKCdpbmFjdGl2ZScsICdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQob2xkSW5kZXgpICYmIG9sZEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zW29sZEluZGV4XS5pY29uU291cmNlID0gaXRlbXNbb2xkSW5kZXhdLmljb25Tb3VyY2UucmVwbGFjZSgnYWN0aXZlJywgJ2luYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG4iXX0=