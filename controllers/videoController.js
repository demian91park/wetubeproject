export const home = (req, res) => res.render("home", { pageTitle: "Home"});

export const search = (req, res) => {
    const {query: { term: searchingBy }} = req;
res.render("search" , {pageTitle:"search", searchingBy});};
  



export const videos = (req, res) => res.render("Videos",{pageTitle: "Videos"});
export const upload = (req, res) => res.render("Upload",{pageTitle: "Upload"});
export const videoDetail = (req, res) => res.render("Video Detail",{pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("edit Video",{pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("delete Video", {pageTitle: "Delete Video"});

