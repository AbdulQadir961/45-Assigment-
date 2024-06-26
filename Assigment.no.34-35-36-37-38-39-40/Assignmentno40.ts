function make_album(artist:string, title:string, track?:number): {artist:string, title: string, track?:number}
{
    let album={
        artist:artist,
        title:title};
    
        if(track !== undefined){
            album.track = track
        }
    return album;
}
    
