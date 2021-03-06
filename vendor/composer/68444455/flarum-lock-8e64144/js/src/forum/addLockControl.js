import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';

export default function addLockControl() {
  extend(DiscussionControls, 'moderationControls', function (items, discussion) {
    if (discussion.canLock()) {
      items.add(
        'lock',
        Button.component(
          {
            icon: 'fas fa-lock',
            onclick: this.lockAction.bind(discussion),
          },
          app.translator.trans(
            discussion.isLocked() ? 'flarum-lock.forum.discussion_controls.unlock_button' : 'flarum-lock.forum.discussion_controls.lock_button'
          )
        )
      );
    }
  });

  DiscussionControls.lockAction = function () {
    this.save({ isLocked: !this.isLocked() }).then(() => {
      if (app.current.matches(DiscussionPage)) {
        app.current.get('stream').update();
      }

      m.redraw();
    });
  };
}
