<?php
class LatexCompleterHooks
{
  public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
    $out->addModules( 'ext.LatexCompleter' );
  }
}

?>
