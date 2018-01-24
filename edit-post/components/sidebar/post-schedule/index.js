/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelRow, Dropdown } from '@wordpress/components';
import { PostSchedule as PostScheduleForm, PostScheduleLabel, PostScheduleCheck } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import './style.scss';

export function PostSchedule() {
	return (
		<PostScheduleCheck>
			<PanelRow className="editor-post-schedule">
				<span>{ __( 'Publish' ) }</span>
				<Dropdown
					position="bottom left"
					contentClassName="editor-post-schedule__dialog"
					renderToggle={ ( { onToggle, isOpen } ) => (
						<button
							type="button"
							className="editor-post-schedule__toggle button-link"
							onClick={ onToggle }
							aria-expanded={ isOpen }
						>
							<PostScheduleLabel />
						</button>
					) }
					renderContent={ () => <PostScheduleForm /> }
				/>
			</PanelRow>
		</PostScheduleCheck>
	);
}

export default PostSchedule;
