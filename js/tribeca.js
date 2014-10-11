/*!
 * Tribeca
 *
 * @category    Tribeca
 * @package     js
 * @copyright   Copyright (c) 2010 Worry Free Labs, LLC. (http://worryfreelabs.com/)
 * @author      Oleksandr Bernatskyi
 */

;function toggleMenu(el, over) {}

jQuery.noConflict();

jQuery(document).ready
(
	function()
	{
		/**
		 * Navigation
		 */
		jQuery('#nav')
			.find('li')
				.removeAttr('onmouseover')
				.removeAttr('onmouseout')
				.unbind('mouseover')
				.unbind('mouseout')
				.hover
				(
					function()
					{
						jQuery(this).toggleClass('over');
					}
				)
				.end()
			.find('> ul > li.parent > a')
				.append('<span class="space"></span>');
		
		
		/**
		 * Products
		 */
		jQuery('.fancybox').fancybox
		({
			titlePosition: 'inside'
		});
		
		jQuery('.tabs-and-content .tabs').tabs();
		jQuery('#product-options-wrapper dt label').append(':');
		
		
		/**
		 * Gallery slideshow
		 */
		$galleryContainer = jQuery("#imgContainer");
		
		if ($galleryContainer.length)
		{
			$galleryContainer.easySlider
			({
				prevId:			'imgControlsPrev',
				nextId:			'imgControlsNext',	
				auto:			true,
				pause:			3000,
				continuous:		true,
				numeric:		true,
				numericId:		'imgControls',
				numericPrev:	true,
				numericNext:	true
			});
		}
	}
);