<div id="home-hero" class="container">
      <div class="row">

        <div class="col-12 col-md-6">
          <h1>Phoenix Web Developer</h1>
          <h2 class="mb-5">Solving problems first, building websites second.</h2>

          <div class="row gx-5">
            <div class="col-12 col-md-auto">
              <a href="<?php echo home_url() ?>/my-work" class="btn btn-secondary--white btn-lg">My Work</a>
            </div>
            <div class="col-12 col-md-auto">
              <a href="<?php echo home_url() ?>/my-work" class="btn btn-primary--white btn-lg">Come talk, I'll listen</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <?php
            echo wp_video_shortcode(array(
              'src' => 'http://localhost:8000/wp-content/uploads/2023/05/emoji-video-home.mp4',
              'preload' => 'auto',
              'autoplay' => true,
              'loop'     => true,
              'muted' => true,
            ));
          ?>
        </div>

      </div>
    </div>