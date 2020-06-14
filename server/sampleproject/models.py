from django.db import models

class Music(models.Model):
    artist = models.CharField(max_length = 200, null=True)
    listeners = models.IntegerField(null=True)
    def __str__(self):
          return 'Artist:{}| Monthly Listeners:{}'.format(self.artist, self.listeners)