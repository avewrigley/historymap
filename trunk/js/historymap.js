var HISTORYMAP = {
    default_zoom:7,
    default_center:new GLatLng( 53.82659674299412, -1.86767578125 ),
};

HISTORYMAP.initMap = function() 
{
    if ( ! GBrowserIsCompatible() )
    {
        console.log( "google maps not supported" );
        return;
    }
    var mapOptions = {
        centerMapOnItems: true,
        // mapCenter: HISTORYMAP.default_center,
        // mapZoom: HISTORYMAP.default_zoom,
        mapTypes: [
            G_NORMAL_MAP,
            G_SATELLITE_MAP,
            G_HYBRID_MAP,
            G_PHYSICAL_MAP,
            G_SATELLITE_3D_MAP
        ]
    };
    HISTORYMAP.timemap = TimeMap.init({
        mapId: "map",
        mapOptions: mapOptions,
        timelineId: "timeline",
        datasets: [
            {
                id: "usstates",
                title: "US States",
                type: "kml",
                options: {
                    // url: "/us_states.kml",
                    url: "/6coblock1761-1841a.kml",
                }
            }
        ],
        bandInfo: [
            {
                width:          "100%", 
                intervalUnit:   Timeline.DateTime.DECADE, 
                intervalPixels: 100,
                showEventText:  false,
                highlight: true
            }
        ]
    });
};
