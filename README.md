### Example app to show Nativescript 3.x.x > tabview issue
This app shows that a crash will occur when using iconSource.replace on a tabview item. 

This behaviour was not present in ns 2.5.X

For demo purposes this app will only try to replace the icon source (and thus crash) 
when clicking on the chat icon(index 2)

Github issue: https://github.com/NativeScript/NativeScript/issues/4138

Stacktrace:

````
An uncaught Exception occurred on "main" thread.
com.tns.NativeScriptException: 
Calling js method onPageSelected failed

TypeError: tabLayout.updateItemAt is not a function
File: "/files/app/tns_modules/tns-core-modules/ui/tab-view/tab-view.js, line: 168, column: 22

StackTrace: 
	Frame: function:'TabViewItem._update', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/tns_modules/tns-core-modules/ui/tab-view/tab-view.js', line: 168, column: 23
	Frame: function:'set', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/tns_modules/tns-core-modules/ui/tab-view/tab-view-common.js', line: 66, column: 22
	Frame: function:'MenuComponent.setIconSource', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/home/menu/menu.component.js', line: 72, column: 36
	Frame: function:'MenuComponent.onTabChange', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/home/menu/menu.component.js', line: 78, column: 14
	Frame: function:'', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/home/menu/menu.component.js', line: 39, column: 19
	Frame: function:'Observable.notify', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/tns_modules/tns-core-modules/data/observable/observable.js', line: 103, column: 23
	Frame: function:'valueChanged', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/tns_modules/tns-core-modules/ui/tab-view/tab-view-common.js', line: 205, column: 16
	Frame: function:'CoercibleProperty._this.set', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/tns_modules/tns-core-modules/ui/core/properties/properties.js', line: 231, column: 25
	Frame: function:'PageChangedListenerImpl.onPageSelected', file:'file:///data/data/nl.energiedirect.selfserviceapp/files/app/tns_modules/tns-core-modules/ui/tab-view/tab-view.js', line: 114, column: 39


	at com.tns.Runtime.callJSMethodNative(Native Method)
	at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1043)
	at com.tns.Runtime.callJSMethodImpl(Runtime.java:925)
	at com.tns.Runtime.callJSMethod(Runtime.java:912)
	at com.tns.Runtime.callJSMethod(Runtime.java:896)
	at com.tns.Runtime.callJSMethod(Runtime.java:888)
	at com.tns.gen.android.support.v4.view.ViewPager_SimpleOnPageChangeListener_frnal_ts_helpers_l58_c38__PageChangedListenerImpl.onPageSelected(ViewPager_SimpleOnPageChangeListener_frnal_ts_helpers_l58_c38__PageChangedListenerImpl.java:12)
	at android.support.v4.view.ViewPager.dispatchOnPageSelected(ViewPager.java:1967)
	at android.support.v4.view.ViewPager.scrollToItem(ViewPager.java:685)
	at android.support.v4.view.ViewPager.setCurrentItemInternal(ViewPager.java:669)
	at android.support.v4.view.ViewPager.setCurrentItemInternal(ViewPager.java:630)
	at android.support.v4.view.ViewPager.setCurrentItem(ViewPager.java:611)
	at org.nativescript.widgets.TabLayout$TabClickListener.onClick(TabLayout.java:406)
	at android.view.View.performClick(View.java:5198)
	at android.view.View$PerformClick.run(View.java:21147)
	at android.os.Handler.handleCallback(Handler.java:739)
	at android.os.Handler.dispatchMessage(Handler.java:95)
	at android.os.Looper.loop(Looper.java:148)
	at android.app.ActivityThread.main(ActivityThread.java:5417)
	at java.lang.reflect.Method.invoke(Native Method)
	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:726)
	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:616)


