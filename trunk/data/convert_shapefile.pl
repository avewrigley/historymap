#!/usr/bin/env perl

use strict;
use warnings;

use Geo::ShapeFile;

my $shapefile = new Geo::ShapeFile( shift );

for my $i ( 1 .. $shapefile->shapes() ) 
{
    my $shape = $shapefile->get_shp_record( $i );
    warn "$i : $shape\n";
    # my %db = $shapefile->get_dbf_record($i);
}

