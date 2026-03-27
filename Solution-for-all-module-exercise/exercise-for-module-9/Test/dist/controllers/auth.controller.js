import { registerService, loginService, refreshTokenService, requestPasswordResetService, resetPasswordService } from "../services/auth.service";
export const register = async (req, res) => {
    try {
        const user = await registerService(req.body);
        res.status(201).json({
            status: "success",
            message: "User registered",
            data: user,
        });
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message });
    }
};
export const login = async (req, res) => {
    try {
        const { accessToken, refreshToken, user } = await loginService(req.body.email, req.body.password);
        res.json({
            status: "success",
            message: "Login successful",
            accessToken,
            refreshToken,
            user,
        });
    }
    catch (err) {
        res.status(401).json({ status: "error", message: err.message });
    }
};
export const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken)
            throw new Error("Refresh token is required");
        const result = await refreshTokenService(refreshToken);
        res.json({
            status: "success",
            message: "Token refreshed successfully",
            accessToken: result.accessToken
        });
    }
    catch (err) {
        res.status(401).json({ status: "error", message: err.message });
    }
};
export const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email)
            throw new Error("Email is required");
        const result = await requestPasswordResetService(email);
        res.json({ status: "success", ...result });
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message });
    }
};
export const resetPassword = async (req, res) => {
    try {
        const { resetToken, newPassword } = req.body;
        if (!resetToken || !newPassword)
            throw new Error("Reset token and new password are required");
        const result = await resetPasswordService(resetToken, newPassword);
        res.json({ status: "success", ...result });
    }
    catch (err) {
        res.status(400).json({ status: "error", message: err.message });
    }
};
