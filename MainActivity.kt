package com.example.myvirtualphone // প্যাকেজ নেম আপনার প্রজেক্ট অনুযায়ী হবে

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // XML ফাইল থেকে বাটনগুলোকে এখানে সংযুক্ত করা হচ্ছে
        val phoneButton: Button = findViewById(R.id.btnPhone)
        val messagesButton: Button = findViewById(R.id.btnMessages)
        val browserButton: Button = findViewById(R.id.btnBrowser)
        val galleryButton: Button = findViewById(R.id.btnGallery)

        // Phone বাটনের জন্য onClickListener সেট করা হচ্ছে
        phoneButton.setOnClickListener {
            // Intent ব্যবহার করে ফোনের ডায়ালার খোলা হচ্ছে
            val intent = Intent(Intent.ACTION_DIAL)
            startActivity(intent)
        }

        // Messages বাটনের জন্য onClickListener সেট করা হচ্ছে
        messagesButton.setOnClickListener {
            // Intent ব্যবহার করে মেসেজিং অ্যাপ খোলার চেষ্টা করা হচ্ছে
            val intent = Intent(Intent.ACTION_MAIN)
            intent.addCategory(Intent.CATEGORY_APP_MESSAGING)
            try {
                startActivity(intent)
            } catch (e: Exception) {
                Toast.makeText(this, "Messaging app not found", Toast.LENGTH_SHORT).show()
            }
        }

        // Browser বাটনের জন্য onClickListener সেট করা হচ্ছে
        browserButton.setOnClickListener {
            // Intent ব্যবহার করে একটি নির্দিষ্ট ওয়েবসাইট খোলা হচ্ছে
            val url = "https://www.google.com"
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            startActivity(intent)
        }

        // Gallery বাটনের জন্য onClickListener সেট করা হচ্ছে
        galleryButton.setOnClickListener {
            // এখানে আমরা শুধু একটি বার্তা বা Toast দেখাচ্ছি
            Toast.makeText(this, "Gallery button clicked!", Toast.LENGTH_SHORT).show()
        }
    }
}
