# portfolio

## Commit signing

This repository enforces GPG-signed commits via CI. Future pushes and pull requests will fail if commits are not signed.

To enable commit signing locally (Linux / macOS):

1. Generate a new GPG key (follow prompts):

	gpg --full-generate-key

2. List your keys and copy the key ID:

	gpg --list-secret-keys --keyid-format=long

3. Tell git to use your key (replace <KEYID>):

	git config --global user.signingkey <KEYID>
	git config --global commit.gpgSign true

4. (Optional) Export and add your public key to GitHub:

	gpg --armor --export <KEYID>

Check a signed commit locally with:

	git log --show-signature -1

If you use a GPG agent or hardware key (YubiKey), follow your provider's setup steps. If you prefer SSH commit signing or S/MIME, adapt accordingly.
