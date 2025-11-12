from pytube import YouTube, extract

class YoutubeService:
    def get_youtube_title(self, video_url):
        """
        Extracts the title of a YouTube video from its URL.

        Args:
            video_url (str): The URL of the YouTube video.

        Returns:
            str: The title of the YouTube video, or None if an error occurs.
        """
        try:
            yt = YouTube(video_url)
            return yt.title
        except Exception as e:
            print(f"Error extracting title: {e}")
            return None

    def get_youtube_id(self, video_url):
        """
        Extracts the ID of a YouTube video from its URL.

        Args:
            video_url (str): The URL of the YouTube video.

        Returns:
            str: The ID of the YouTube video, or None if an error occurs.
        """
        try:
            return extract.video_id(video_url)
        except Exception as e:
            print(f"Error extracting ID: {e}")
            return None