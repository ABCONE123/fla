import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import PostControls from 'flarum/forum/utils/PostControls';
import Button from 'flarum/common/components/Button';

import FlagPostModal from './components/FlagPostModal';

export default function () {
  extend(PostControls, 'userControls', function (items, post) {
    if (post.isHidden() || post.contentType() !== 'comment' || !post.canFlag()) return;

    items.add(
      'flag',
      <Button icon="fas fa-flag" onclick={() => app.modal.show(FlagPostModal, { post })}>
        {app.translator.trans('flarum-flags.forum.post_controls.flag_button')}
      </Button>
    );
  });
}
