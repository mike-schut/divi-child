?><?php

if ( ! function_exists( 'divi_child_assets' ) ) {
	function divi_child_assets() {

		// Stylesheet
    wp_enqueue_style( 'divi-child-stylesheet', get_stylesheet_directory_uri() . '/dist/app.css', array(), null );

		// Scripts
		wp_enqueue_script( 'divi-child-script', get_stylesheet_directory_uri() . '/dist/app.js', array(), '', true );

	}
	add_action( 'wp_enqueue_scripts', 'divi_child_assets' );
}
